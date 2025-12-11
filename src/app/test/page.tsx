'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [mountTime, setMountTime] = useState<string>('');

  useEffect(() => {
    // Registrar tiempo de montaje
    const time = new Date().toLocaleTimeString();
    setMountTime(time);
    console.log(`🔥 TestPage montado a las ${time}`);

    return () => {
      console.log(`💀 TestPage desmontado - contador estaba en: ${count}`);
    };
  }, []); // Solo en montaje inicial

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🔄 Test de Remontaje de Componentes
          </h1>
          <p className="text-gray-600">
            Comprueba cómo se resetea el estado al cambiar de ruta
          </p>
        </div>

        {/* Estado del componente */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 text-white">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm opacity-90 mb-1">Contador actual</p>
              <p className="text-5xl font-bold">{count}</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-1">Montado a las</p>
              <p className="text-2xl font-semibold">{mountTime}</p>
            </div>
          </div>
        </div>

        {/* Controles */}
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            ➕ Incrementar
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            ➖ Decrementar
          </button>
        </div>

        {/* Navegación */}
        <div className="border-t-2 border-gray-200 pt-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Navegación de prueba
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors shadow-md"
            >
              🏠 Ir a Home
            </Link>
            <Link
              href="/test"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors shadow-md"
            >
              🔄 Recargar Test
            </Link>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center">
            <span className="mr-2">📋</span>
            Instrucciones de prueba
          </h3>
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold mr-2 text-purple-600">1.</span>
              <span>Haz click en "Incrementar" varias veces hasta llegar, por ejemplo, a 10</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-purple-600">2.</span>
              <span>Haz click en "Ir a Home" para cambiar de ruta</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-purple-600">3.</span>
              <span>Vuelve a esta página haciendo click en "Test" en el navbar</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-purple-600">4.</span>
              <span><strong>Verás que el contador se resetea a 0</strong> porque el componente se desmontó y volvió a montar</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-purple-600">5.</span>
              <span>Abre la consola del navegador (F12) para ver los logs de montaje/desmontaje</span>
            </li>
          </ol>
        </div>

        {/* Explicación técnica */}
        <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">
            🔧 ¿Qué está pasando técnicamente?
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>El componente <code className="bg-gray-200 px-2 py-1 rounded">PageWrapper</code> usa <code className="bg-gray-200 px-2 py-1 rounded">key={`pathname`}</code></span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>Cuando cambias de ruta, la <code className="bg-gray-200 px-2 py-1 rounded">key</code> cambia</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>React detecta que la <code className="bg-gray-200 px-2 py-1 rounded">key</code> es diferente y considera que es un componente nuevo</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>Desmonta el componente viejo (ejecuta cleanup de useEffect)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <span>Monta el componente nuevo desde cero (ejecuta useEffect inicial, resetea estados)</span>
            </li>
          </ul>
        </div>

        {/* Estado del localStorage para demostrar que no se limpia */}
        <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
          <p className="text-sm text-gray-700">
            <strong>Nota:</strong> El remontaje NO limpia localStorage, sessionStorage ni cookies.
            Solo resetea el estado local de React y vuelve a ejecutar useEffect.
          </p>
        </div>
      </div>
    </div>
  );
}
