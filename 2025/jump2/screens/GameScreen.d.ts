import { GameManager } from '../core/GameManager';
export declare class GameScreen {
    private gameManager;
    private app;
    private game;
    private container;
    private jumpButton;
    private directionButton;
    private timeBar;
    private scoreText;
    private jumpStartTime;
    private isJumping;
    private introTimeoutId;
    private isIntroPhase;
    private uiUpdateCallback;
    constructor(gameManager: GameManager);
    init(): Promise<void>;
    private showIntroScreen;
    private startGame;
    private checkWebGLSupport;
    private createUI;
    private startJump;
    private endJump;
    private updateUI;
    private handleGameEnd;
    destroy(): void;
}
//# sourceMappingURL=GameScreen.d.ts.map