# ---- Build Stage ----
    FROM node:18 AS build
    WORKDIR /app
    
    # Copy only frontend code
    COPY frontend/package*.json ./frontend/
    WORKDIR /app/frontend
    RUN npm install
    
    # Copy the rest of the frontend folder
    COPY frontend/ .
    
    # Build production bundle
    RUN npm run build
    
    # ---- Serve Stage ----
    FROM node:18
    WORKDIR /app
    
    # Copy built frontend files
    COPY --from=build /app/frontend/dist ./dist
    
    # Install a simple static server
    RUN npm install -g serve
    
    # Cloud Run requires port 8080
    EXPOSE 8080
    
    # Serve the production build
    CMD ["serve", "-s", "dist", "-l", "8080"]
    

