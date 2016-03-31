export const updateNavbarColor = () => {
  const hour = (new Date()).getHours()
  const isNight = hour > 16;

  if (isNight) {
    $('#main-nav').addClass('navbar-inverse')
  }
}
