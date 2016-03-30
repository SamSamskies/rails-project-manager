export const updateNavbarColor = () => {
  const hour = (new Date()).getHours()
  const isNight = hour > 10;

  if (isNight) {
    $('#main-nav').addClass('navbar-inverse')
  }
}
