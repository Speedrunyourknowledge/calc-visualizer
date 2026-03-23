declare global {
    namespace Express {
        interface Request {
            user: {
                id: string;
                name: string;
                email: string;
                [key: string]: any;
            };
        }
    }
}

export interface IntegralData {
    equation: string;
    lowerBound: number;
    upperBound: number;
    topic: string;
}

// fill out remaining fields for derivatives
export interface DerivativeData {
    equation: string;
    topic: string;
}