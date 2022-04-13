import { rateLimit } from 'express-rate-limit';

export const limitRequest = rateLimit({
    windowMs : 1 * 60 * 1000,
    max      : 10,
    message   : 'Too many request, try again letter'
})