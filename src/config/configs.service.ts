import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

config({ path: `${process.cwd()}/.dev.local.env` });
@Injectable()
export class ConfigsService {
    get databaseConfig() {
        return {
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE,
            port: parseInt(process.env.DATABASE_PORT),
            host: process.env.DATABASE_HOST,
            entities: ['dist/*/entities/*.entity.js'],
            migrations: ['dist/database/migrations/*js'],
            synchronize: false,
        };
    }

    get jwtConfig() {
        return {
            secretKye: process.env.JWT_SECRET,
            expiresIn: process.env.EXPIRES_IN,
        };
    }
}
