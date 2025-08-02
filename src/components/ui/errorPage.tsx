'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ErrorPageProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorPage({ message = 'Something went wrong', onRetry }: ErrorPageProps) {
  const router = useRouter();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>

        <p className="text-zinc-400 mb-8">{message}</p>

        <div className="flex gap-3 justify-center">
          <Button
            onClick={handleRetry}
            className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>

          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="border-zinc-700 text-white-300 hover:bg-zinc-800 "
          >
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
