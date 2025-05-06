const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-red-500'>404</h1>
      <p className='text-lg text-gray-700 mt-4'>Page non trouvée</p>
      <a
        href='/'
        className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
        Retour à l'accueil
      </a>
    </div>
  );
};

export default ErrorPage;
