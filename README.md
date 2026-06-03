# CA Portfolio Deployment

This project is a Vite React frontend with an Express backend and is configured to deploy to AWS Elastic Beanstalk using Docker.

## What was added

- `Dockerfile`
- `.dockerignore`
- `.github/workflows/deploy-to-eb.yml`

## GitHub -> AWS deployment steps

1. Create a GitHub repository and push this project to it.
2. In GitHub repository settings, add the following secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `EB_APPLICATION_NAME`
   - `EB_ENVIRONMENT_NAME`
   - `EB_S3_BUCKET`
3. Ensure your Elastic Beanstalk environment is using the Docker platform.
4. Push to the `main` or `master` branch.

## Local build

```bash
npm ci
npm run build
```

## Local Docker test

```bash
docker build -t ca-portfolio .
docker run -p 5000:5000 --env-file .env ca-portfolio
```

## Environment variables

Make sure these are configured in AWS and locally:

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`
- `TWILIO_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_WHATSAPP_NUMBER`
- email and Google API credentials
