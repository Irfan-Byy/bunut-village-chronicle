<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    // Ambil semua berita
    public function index()
    {
        return response()->json(News::orderBy('created_at', 'desc')->get());
    }

    // Simpan berita baru
    public function store(Request $request)
{
    $data = $request->validate([
        'title' => 'required|string|max:255',
        'excerpt' => 'nullable|string',
        'content' => 'nullable|string',
        'author' => 'nullable|string|max:100',
        'category' => 'nullable|string|max:100',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'date' => 'nullable|date',
    ]);

    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('news', 'public');
        $data['image'] = $path; // simpan path file di database
    }

    $news = News::create($data);

    return response()->json($news, 201);
}   

    // Detail berita
    public function show(News $news)
    {
        return response()->json($news);
    }

    // Update berita
    public function update(Request $request, News $news)
{
    $data = $request->validate([
        'title' => 'sometimes|string|max:255',
        'excerpt' => 'nullable|string',
        'content' => 'nullable|string',
        'author' => 'nullable|string|max:100',
        'category' => 'nullable|string|max:100',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'date' => 'nullable|date',
    ]);

    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('news', 'public');
        $data['image'] = $path;
    }

    $news->update($data);

    return response()->json($news);
}

    // Hapus berita
    public function destroy(News $news)
    {
        $news->delete();
        return response()->json(null, 204);
    }
}
