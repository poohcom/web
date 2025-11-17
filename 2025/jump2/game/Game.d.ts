import * as PIXI from 'pixi.js';
export declare enum PlatformType {
    NORMAL = "normal",
    BREAKABLE_ICE = "breakable_ice",
    WIDE_ICE = "wide_ice"
}
export declare class Game {
    private app;
    private character;
    private platforms;
    private items;
    private camera;
    private timeRemaining;
    private score;
    private isPaused;
    private itemSpawnTimer;
    private platformWidth;
    private platformHeight;
    private gridSize;
    private lastPlatformY;
    private lastPlatformX;
    private startPlatformY;
    private direction;
    private starPauseTimer;
    private isStarPaused;
    private canJump;
    private lastCameraY;
    private wasJumping;
    constructor(app: PIXI.Application, characterId: number);
    private createInitialPlatforms;
    private generatePlatforms;
    private selectRandomCandidates;
    private determinePlatformTypeByHeight;
    private determinePlatformType;
    private update;
    private checkPlatformCollisions;
    private checkJumpLanding;
    private checkItemCollisions;
    private handleItemCollision;
    private spawnItem;
    private updateCamera;
    private render;
    jump(shortJump: boolean): void;
    changeDirection(): void;
    getTimeRemaining(): number;
    getScore(): number;
    pause(): void;
    resume(): void;
    endGame(): void;
    private tickerCallback;
    private startGameLoop;
    destroy(): void;
}
//# sourceMappingURL=Game.d.ts.map