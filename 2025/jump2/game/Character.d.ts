import * as PIXI from 'pixi.js';
export declare class Character {
    private sprite;
    private x;
    private y;
    private velocityX;
    private velocityY;
    private gravity;
    private characterId;
    private direction;
    private textureL;
    private textureR;
    private onTextureLoaded?;
    private isJumping;
    private jumpStartX;
    private jumpStartY;
    private jumpTargetX;
    private jumpTargetY;
    private jumpProgress;
    private jumpDuration;
    private jumpStartTime;
    constructor(characterId: number, x: number, y: number, onTextureLoaded?: () => void);
    private loadTextures;
    private updateSprite;
    update(deltaMS: number): void;
    jumpTo(targetX: number, targetY: number): void;
    applyGravity(): void;
    setX(x: number): void;
    setY(y: number): void;
    setVelocityY(vy: number): void;
    setDirection(dir: number): void;
    getX(): number;
    getY(): number;
    getVelocityY(): number;
    getIsJumping(): boolean;
    getBounds(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    getSprite(): PIXI.Sprite;
    destroy(): void;
}
//# sourceMappingURL=Character.d.ts.map