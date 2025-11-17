import * as PIXI from 'pixi.js';
export type ItemType = 'obstacle' | 'star' | 'bottle';
export declare class Item {
    private sprite;
    private graphics;
    private text;
    private type;
    private x;
    private y;
    private velocityY;
    private itemNumber;
    constructor(type: ItemType, x: number, y: number);
    private updateSprite;
    update(deltaMS: number): void;
    getType(): ItemType;
    getX(): number;
    getY(): number;
    getBounds(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    getSprite(): PIXI.Container;
    getItemNumber(): number;
    getItemDescription(): string;
    destroy(): void;
}
//# sourceMappingURL=Item.d.ts.map