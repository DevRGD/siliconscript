const script = `
(function() {
  function getInitialTheme() {
    let theme;
    try {
      theme = localStorage.getItem('theme');
      if (theme) {
        return theme;
      }
    } catch (e) {
      return 'light';
    }

    if (!theme) {
      localStorage.setItem('theme', 'system');
      return 'system';
    }

    return theme;
  }

  const preference = getInitialTheme();
  let appliedTheme = preference;

  if (preference === 'system') {
    try {
      appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } catch (e) {
      appliedTheme = 'light';
    }
  }

  document.documentElement.setAttribute('data-theme', appliedTheme);
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
