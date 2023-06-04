#!/usr/bin/env node
import 'source-map-support/register';
import { App, Tags } from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';
import { config } from 'dotenv';

config();

const app = new App();

const appName: string = process.env.APP_NAME || 'cdk-app';
console.log('appName: ', appName);
const environment: string = process.env.ENVIRONMENT || 'dev';
console.log('environment: ', environment);
const region: string = process.env.AWS_REGION || 'us-east-1';
console.log('region: ', region);

Tags.of(app).add('App', appName);
Tags.of(app).add('Environment', environment);

new AppStack(app, 'AppStack', {
    env: { region },
});
