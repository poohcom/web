import { GameManager } from '../core/GameManager';
export declare class IntroScreen {
    private gameManager;
    private app;
    private container;
    private timeoutId;
    constructor(gameManager: GameManager);
    init(): Promise<void>;
    destroy(): void;
}
//# sourceMappingURL=IntroScreen.d.ts.map