﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Microsoft.EntityFrameworkCore.ValueGeneration;
using SoundVast.Data;
using System;

namespace SoundVast.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.Audio", b =>
                {
                    b.Property<int>("Id");

                    b.Property<string>("CoverImageName");

                    b.Property<DateTimeOffset>("DateAdded");

                    b.Property<string>("Description");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Audios");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Audio");
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.AudioGenre", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AudioId");

                    b.Property<int>("GenreId");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("GenreId");

                    b.ToTable("AudioGenre");
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.AudioTag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AudioId");

                    b.Property<int>("TagId");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("TagId");

                    b.ToTable("AudioTag");
                });

            modelBuilder.Entity("SoundVast.Components.Flag.Models.Flag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AdditionalDetails");

                    b.Property<int?>("AudioId");

                    b.Property<string>("Reason");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.ToTable("Flags");
                });

            modelBuilder.Entity("SoundVast.Components.Genre.Models.Genre", b =>
                {
                    b.Property<int>("Id");

                    b.Property<string>("CoverImageName");

                    b.Property<DateTimeOffset>("DateAdded");

                    b.Property<DateTimeOffset>("DateUpdated");

                    b.Property<string>("Description");

                    b.Property<int?>("GenreId");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Position");

                    b.Property<string>("Slug")
                        .IsRequired();

                    b.Property<string>("Urlid");

                    b.HasKey("Id");

                    b.HasIndex("GenreId");

                    b.ToTable("Genres");
                });

            modelBuilder.Entity("SoundVast.Components.LiveStream.Models.StreamData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Bitrate");

                    b.Property<string>("ContentType");

                    b.Property<int?>("LiveStreamId");

                    b.Property<string>("LiveStreamUrl")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("LiveStreamId");

                    b.ToTable("StreamData");
                });

            modelBuilder.Entity("SoundVast.Components.Quote.Models.Quote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Quotation")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Quotes");
                });

            modelBuilder.Entity("SoundVast.Components.Rating.Models.Rating", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AudioId");

                    b.Property<bool>("Liked");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("UserId");

                    b.ToTable("Ratings");
                });

            modelBuilder.Entity("SoundVast.Components.Tag.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Tag");
                });

            modelBuilder.Entity("SoundVast.Components.User.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<int?>("AudioId");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("SoundVast.Components.LiveStream.Models.LiveStream", b =>
                {
                    b.HasBaseType("SoundVast.Components.Audio.Models.Audio");

                    b.Property<string>("Country")
                        .IsRequired();

                    b.Property<DateTimeOffset>("DateUpdated");

                    b.Property<string>("FacebookUrl");

                    b.Property<int>("Listeners");

                    b.Property<string>("Slug")
                        .IsRequired();

                    b.Property<string>("TwitterUrl");

                    b.Property<string>("WebsiteUrl");

                    b.ToTable("LiveStream");

                    b.HasDiscriminator().HasValue("LiveStream");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("SoundVast.Components.User.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.AudioGenre", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany("AudioGenres")
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.Genre.Models.Genre", "Genre")
                        .WithMany("AudioGenres")
                        .HasForeignKey("GenreId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Components.Audio.Models.AudioTag", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany("AudioTags")
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("SoundVast.Components.Tag.Tag", "Tag")
                        .WithMany("AudioTags")
                        .HasForeignKey("TagId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SoundVast.Components.Flag.Models.Flag", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany()
                        .HasForeignKey("AudioId");
                });

            modelBuilder.Entity("SoundVast.Components.Genre.Models.Genre", b =>
                {
                    b.HasOne("SoundVast.Components.Genre.Models.Genre")
                        .WithMany("ChildGenres")
                        .HasForeignKey("GenreId");
                });

            modelBuilder.Entity("SoundVast.Components.LiveStream.Models.StreamData", b =>
                {
                    b.HasOne("SoundVast.Components.LiveStream.Models.LiveStream")
                        .WithMany("StreamDatas")
                        .HasForeignKey("LiveStreamId");
                });

            modelBuilder.Entity("SoundVast.Components.Rating.Models.Rating", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio", "Audio")
                        .WithMany("Ratings")
                        .HasForeignKey("AudioId");

                    b.HasOne("SoundVast.Components.User.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("SoundVast.Components.User.ApplicationUser", b =>
                {
                    b.HasOne("SoundVast.Components.Audio.Models.Audio")
                        .WithMany("Contributors")
                        .HasForeignKey("AudioId");
                });
#pragma warning restore 612, 618
        }
    }
}
