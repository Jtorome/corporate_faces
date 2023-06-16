import { config } from './config/config';
import { createApp } from './app';

createApp().listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Corriendo en el puerto ${config.port}`);
});
