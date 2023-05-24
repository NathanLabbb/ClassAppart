<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function showProducts()
    {
        $products = Product::all();

        return response()->json($products);
    }

    public function addProducts(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'desc' => 'required',
            'img' => 'required',
            'price' => 'required|numeric',
        ]);

        // Création d'un nouvel objet Product avec les données validées
        $product = new Product;
        $product->title = $validatedData['title'];
        $product->price = $validatedData['price'];
        $product->desc = $validatedData['desc'];
        $product->img = $validatedData['img'];

        // Sauvegarde du produit dans la base de données
        $product->save();

        // Réponse JSON indiquant le succès de l'ajout du produit
        return response()->json(['message' => 'Produit ajouté avec succès']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function addProductInCart(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        // je met a jour is_in_cart avec la valeur de la requete, sinon false
        $product->is_in_cart = $request->input('is_in_cart', false);

        return response()->json(['message' => 'Statut du produit mis à jour avec succès'], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
