import * as PIXI from 'pixi.js';
import { PlatformType } from './Game';
export declare class Platform {
    private sprite;
    private type;
    private x;
    private y;
    private width;
    private height;
    private breakTimer;
    private isBreaking;
    private breakCallback;
    constructor(type: PlatformType, x: number, y: number, width: number, height: number);
    private updateSprite;
    startBreaking(callback: () => void): void;
    update(deltaMS: number): void;
    getType(): PlatformType;
    getBounds(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    getSprite(): PIXI.Graphics;
    destroy(): void;
}
//# sourceMappingURL=Platform.d.ts.map