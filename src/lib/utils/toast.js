export default function showToast(
  globalObject, 
  msg, 
  duration = 2000, 
  design = { background: 'rgb(255 234 196', color: '#363636'}
) {

  const { background, color } = design


  globalObject && globalObject.Toastify({
    text: msg,
    duration: duration,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    style: {
      display: 'flex',
      alignItems: 'center',
      color: color,
      background: background,
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)',
      maxWidth: '350px',
      pointerEvents: 'auto',
      padding: '12px 18px',
      borderRadius: '8px',
      lineHeight: '1.3',
      willChange: 'transform',
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
