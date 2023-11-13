import { Response } from "express"


// success message helper function
export const sendSuccess = (status: number = 200, data: any, res: Response) => {
    return res.status(status).json({
        success: true,
        data: data
    })
}

// error message helper function
export const sendError = (status: number = 500, data: string, res: Response) => {
    return res.status(status).json({
        success: false,
        data: data
    })
}