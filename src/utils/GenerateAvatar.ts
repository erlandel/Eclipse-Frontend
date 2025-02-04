function generateAvatarImage(text: string): string {
    const firstLetter = text.charAt(0).toUpperCase(); // Obtener la primera letra y convertirla a mayúscula

    const backgroundColor = "#06402B"; // Color de fondo del avatar

    const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <rect width="100" height="100" fill="${backgroundColor}" />
            <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="40" fill="white" font-family="Arial" dy=".1em">
              ${firstLetter}
            </text>
          </svg>`;

    return `data:image/svg+xml;base64,${btoa(svg)}`; // Convertir el SVG a base64 para usarlo como src
  }

  export default generateAvatarImage;