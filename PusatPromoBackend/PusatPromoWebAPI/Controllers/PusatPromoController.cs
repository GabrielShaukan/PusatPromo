using Microsoft.AspNetCore.Mvc;

namespace PusatPromoWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PusatPromoController : ControllerBase
    {
        private readonly ILogger<PusatPromoController> _logger;

        public PusatPromoController(ILogger<PusatPromoController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetHelloWorld")]
        public String Get()
        {
            return "Hello World!";
        }
    }
}
