let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;

  //constructor() impede que alguém faça um "new" nessa classe. Ela é singleton agora
  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url));
  }

  //ou puxa a instância da classe já existente ou cria uma nova. Faz dela singleton
  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }

    return instance;
  }

  //colhe a mensagem e aloca no worker
  postMessage(message: any) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
