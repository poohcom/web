export declare class ApiService {
    private static baseUrl;
    private static isDevelopment;
    static getGameKey(): Promise<string>;
    static getMonthlyRanking(): Promise<any[]>;
    static getResultRanking(score: number): Promise<any>;
    static submitEventInfo(info: {
        name: string;
        phone: string;
        address: string;
        detailAddress: string;
        score: number;
        gameKey: string;
        startTime: number;
    }): Promise<boolean>;
}
//# sourceMappingURL=ApiService.d.ts.map