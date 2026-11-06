import fontStyles from './plugin-fonts.css?inline';

export function installPluginFonts(iconFontStyles: string): void {
  if (document.getElementById('oscd-plugin-fonts')) return;

  // Browsers need font-face declarations outside the shadow root.
  const style = document.createElement('style');
  style.id = 'oscd-plugin-fonts';
  style.textContent = `${fontStyles}\n${iconFontStyles}`;
  document.head.appendChild(style);
}
