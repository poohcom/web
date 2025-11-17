export declare enum ScreenType {
    START = "start",
    HELP = "help",
    RANKING = "ranking",
    CHARACTER_SELECT = "character_select",
    INTRO = "intro",
    GAME = "game",
    RESULT = "result",
    SHARE = "share",
    INFO_INPUT = "info_input"
}
export declare class GameManager {
    private currentScreen;
    private uiLayer;
    private gameData;
    constructor();
    init(): void;
    showScreen(screenType: ScreenType): void;
    getGameData(): {
        nickname: string;
        characterId: number;
        score: number;
        gameKey: string;
        startTime: number;
    };
    setGameData(data: Partial<typeof this.gameData>): void;
    getUILayer(): HTMLElement;
}
//# sourceMappingURL=GameManager.d.ts.map