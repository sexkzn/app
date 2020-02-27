const Api = {
  MAIN: '/',
  girls: '/api/profiles?page=:page',
  girl: '/api/my_profiles/:id',
  profile: '/api/profile',
  profiles: '/api/my_profiles',
  profilesEdit: '/profiles/edit/:id',
  profilesDelete: '/profiles/delete/:id',
  login: '/login',
  config: '/config',
  register: '/register',
  captcha: '/captcha',
  profileCreate: '/api/profiles',
  verify: '/verify',
  logout: '/logout',
  PICTURES: '/api/images/public/:id/upload',
  VERIFY_PICTURES: '/api/images/private/:id/upload',
};

export default Api;
