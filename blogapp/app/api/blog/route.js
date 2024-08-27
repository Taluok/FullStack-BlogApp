import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import BlogModel from "@/lib/models/BlogModel";
const fs = require('fs')

// Asegura que la base de datos esté conectada antes de cualquier operación
const LoadDB = async () => {
    await ConnectDB(); // Llama a ConnectDB
}

LoadDB();
// Api endpoint to get all blogs
export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }
    else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }

}

//Api Endpoint for uploading blogs
export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        // Procesa la imagen
        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        // Crea el objeto de datos del blog
        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imgUrl,
            authorImg: formData.get('authorImg'),
        };

        // Guarda el blog en la base de datos
        await BlogModel.create(blogData);
        console.log("Blog Guardado");

        return NextResponse.json({ success: true, msg: "Blog Añadido" });
    } catch (error) {
        console.error("Error al guardar el blog:", error);
        return NextResponse.json({ success: false, msg: "Error al guardar el blog" });
    }
}

//Creating API endpoint to delete blog
export async function DELETe(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Eliminado"})
}

