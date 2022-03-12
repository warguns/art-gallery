
import { Server } from './server';

export class ArtBackendApp {
  private server?: Server;

  async start() {
    const port = process.env.PORT || '3000';
    this.server = new Server(port);
    return this.server.listen();
  }

  async stop() {
    await this.server?.stop();
  }

  get port(): string {
    if (!this.server) {
      throw new Error('Art backend application has not been started');
    }
    return this.server.port;
  }

  get httpServer() {
    return this.server?.httpServer;
  }

}
