using pv.Models.model;

namespace pv.Repository
{
    interface IUserRepository
    {

        UserEntity FindByUserName(string userName);
    }
}
