using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CackeBack.DAL.Execptions
{
    public class BadRequestException : Exception
    {
        public BadRequestException(string?  menssage) :base(menssage)
        { 
        
        }
    }
}
