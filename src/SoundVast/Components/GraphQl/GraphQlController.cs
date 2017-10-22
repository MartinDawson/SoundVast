using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using SoundVast.Components.GraphQl.Models;
using SoundVast.Components.Song;
using SoundVast.CustomHelpers;
using SoundVast.Validation;

namespace SoundVast.Components.GraphQl
{
    [Route("graphql")]
    public class GraphQlController : Controller
    {
        private readonly Query _query;
        private readonly Mutation _mutation;
        private readonly IValidationProvider _validationProvider;

        public GraphQlController(Query query, Mutation mutation, IValidationProvider validationProvider)
        {
            _query = query;
            _mutation = mutation;
            _validationProvider = validationProvider;
        }

        [HttpPost]
        public async Task<IActionResult> Post(GraphQlQuery graphQlQuery)
        {
            var inputs = graphQlQuery.Variables.ToInputs();
            var schema = new Schema
            {
                Query = _query,
                Mutation = _mutation
            };
            var executionResult = await new DocumentExecuter().ExecuteAsync(_ =>
            {
                _.Schema = schema;
                _.Query = graphQlQuery.Query;
                _.Inputs = inputs;
                _.UserContext = graphQlQuery.Uploadables;
            });

            if (_validationProvider.HasErrors)
            {
                return BadRequest(_validationProvider.ValidationErrors);
            }

            if (executionResult?.Errors?.Count > 0)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, executionResult.Errors);
            }

            return Ok(executionResult);
        }
    }
}