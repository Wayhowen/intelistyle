# Use the official MongoDB image as the base image
FROM mongo

# Set the working directory
WORKDIR /data

# Copy the "garments.jl" file to the container
COPY garments.jl .

# Run the MongoDB instance and import data from "garments.jl"
#CMD mongoimport --db mydb --collection garments --file garments.jl --jsonArray