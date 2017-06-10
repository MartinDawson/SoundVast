﻿using System;
using System.Collections;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SoundVast.Data;
using SoundVast.Repository;
using SoundVast.Services;
using SoundVast.Storage.CloudStorage;
using SoundVast.Storage.CloudStorage.AzureStorage;
using SoundVast.Storage.FileStorage;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using SoundVast.Components;
using SoundVast.Components.Audio;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Category;
using SoundVast.Components.Comment;
using SoundVast.Components.Comment.Models;
using SoundVast.Components.FileStream;
using SoundVast.Components.FileStream.Models;
using SoundVast.Components.Genre;
using SoundVast.Components.LiveStream;
using SoundVast.Components.LiveStream.Models;
using SoundVast.Components.Playlist;
using SoundVast.Components.Playlist.Models;
using SoundVast.Components.Quote;
using SoundVast.Components.Quote.Models;
using SoundVast.Components.Rating;
using SoundVast.Components.Report;
using SoundVast.Components.User;

namespace SoundVast
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            _configuration = builder.Build();
            JobScheduler.Start();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
                {
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequiredLength = 0;
                })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.CookieName = ".SoundVast";
            });

            services.AddMvc();
            services.AddCloudscribePagination();
            //services.AddAutoMapper();

            var azureStorage = new AzureStorage(_configuration);

            // Add application services.
            services.AddSingleton(_configuration);
            services.AddSingleton<ICloudStorage>(azureStorage);
            services.AddSingleton<IFileStorage, FileStorage>();
            services.AddSingleton(new AutoMapperConfiguration(azureStorage));
            services.AddSingleton(AutoMapperConfiguration.Config.CreateMapper());
            services.AddSingleton(new ModelStateDictionary());

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();

            services.AddScoped<ICloudBlob, AzureBlob>();
            services.AddScoped<IValidationDictionary, ModelStateWrapper>();
            services.AddScoped<IRepository<AudioModel>, Repository<AudioModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<PlaylistModel>, Repository<PlaylistModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStream>, Repository<FileStream, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStreamGenreModel>, Repository<FileStreamGenreModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStreamCategoryModel>, Repository<FileStreamCategoryModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<FileStreamReportModel>, Repository<FileStreamReportModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<AudioRatingModel>, Repository<AudioRatingModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamModel>, Repository<LiveStreamModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamGenreModel>, Repository<LiveStreamGenreModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamCategoryModel>, Repository<LiveStreamCategoryModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamReportModel>, Repository<LiveStreamReportModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<LiveStreamRatingModel>, Repository<LiveStreamRatingModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<CommentModel>, Repository<CommentModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<CommentRatingModel>, Repository<CommentRatingModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<CommentReportModel>, Repository<CommentReportModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<LinkModel>, Repository<LinkModel, ApplicationDbContext>>();
            services.AddScoped<IRepository<QuoteModel>, Repository<QuoteModel, ApplicationDbContext>>();
            services.AddScoped<IAudioService<AudioModel>, AudioService<AudioModel>>();
            services.AddScoped<IPlaylistService, PlaylistService>();
            services.AddScoped<IFileStreamService, FileStreamService>();
            services.AddScoped<IGenreService<FileStreamGenreModel>, GenreService<FileStreamGenreModel>>();
            services.AddScoped<ICategoryService<FileStreamCategoryModel>, CategoryService<FileStreamCategoryModel>>();
            services.AddScoped<IReportService<FileStreamReportModel>, ReportService<FileStreamReportModel>>();
            services.AddScoped<IRatingService<AudioRatingModel>, RatingService<AudioRatingModel>>();
            services.AddScoped<ILiveStreamService, LiveStreamService>();
            services.AddScoped<IGenreService<LiveStreamGenreModel>, GenreService<LiveStreamGenreModel>>();
            services.AddScoped<ICategoryService<LiveStreamCategoryModel>, CategoryService<LiveStreamCategoryModel>>();
            services.AddScoped<IReportService<LiveStreamReportModel>, ReportService<LiveStreamReportModel>>();
            services.AddScoped<IRatingService<LiveStreamRatingModel>, RatingService<LiveStreamRatingModel>>();
            services.AddScoped<ICommentService, CommentService>();
            services.AddScoped<IRatingService<CommentRatingModel>, RatingService<CommentRatingModel>>();
            services.AddScoped<IReportService<CommentReportModel>, ReportService<CommentReportModel>>();
            services.AddScoped<IQuoteService, QuoteService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(_configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    ConfigFile = "./webpack.config.babel.js"
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseIdentity();

            app.UseFacebookAuthentication(new FacebookOptions
            {
                AppId = _configuration["Facebook:Id"],
                AppSecret = _configuration["Facebook:Secret"]
            });

            app.UseTwitterAuthentication(new TwitterOptions
            {
                ConsumerKey = _configuration["Twitter:Id"],
                ConsumerSecret = _configuration["Twitter:Secret"]
            });

            app.UseGoogleAuthentication(new GoogleOptions()
            {
                ClientId = _configuration["Google:Id"],
                ClientSecret = _configuration["Google:Secret"]
            });

            // Add external authentication middleware below. To configure them please see http://go.microsoft.com/fwlink/?LinkID=532715
            app.SeedData();
            app.UseSession();

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        "default_2",
            //        "{controller=FileStream}/{action=FileStreams}/{id?}");
            //});

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        "default",
            //        "{controller=FileStream}/{action=FileStreams}/{genre?}/{category=Song}/{pageNumber=1}");
            //});

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "app",
                    "{controller}/{action}"
                );
            });

            app.UseMvc(routes =>
            {
                routes.MapSpaFallbackRoute(
                    "default",
                    new
                    {
                        controller = "App",
                        action = "Index"
                    }
                );
            });
        }
    }
}
