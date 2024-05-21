<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string('angol');
            $table->string('magyar');
            $table->foreignId('temaId')->references('id')->on('temas');
            $table->timestamps();
        });
        Szavak::create([
            'angol'=> 'door',
            'magyar'=> 'ajtó',
            'temaId'=> '1',
        ]);
        Szavak::create([
            'angol'=> 'apple',
            'magyar'=> 'alma',
            'temaId'=> '1',
        ]);
        Szavak::create([
            'angol'=> 'orange',
            'magyar'=> 'narancs',
            'temaId'=> '1',
        ]);
        Szavak::create([
            'angol'=> 'run',
            'magyar'=> 'futni',
            'temaId'=> '2',
        ]);
        Szavak::create([
            'angol'=> 'swim',
            'magyar'=> 'úszni',
            'temaId'=> '2',
        ]);
        Szavak::create([
            'angol'=> 'play',
            'magyar'=> 'játszani',
            'temaId'=> '2',
        ]);
        Szavak::create([
            'angol'=> 'beautiful',
            'magyar'=> 'szép',
            'temaId'=> '3',
        ]);
        Szavak::create([
            'angol'=> 'old',
            'magyar'=> 'öreg',
            'temaId'=> '3',
        ]);
        Szavak::create([
            'angol'=> 'new',
            'magyar'=> 'új',
            'temaId'=> '3',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
