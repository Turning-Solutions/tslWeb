"use client";

import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader2 } from 'lucide-react';

export default function SplineWrapper() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        console.log('Spline scene loaded successfully');
        setIsLoading(false);
    };

    const handleError = (e: any) => {
        console.error('Spline scene failed to load:', e);
        setHasError(true);
        setIsLoading(false);
    };

    if (hasError) {
        return (
            <div className="w-full h-full bg-linear-to-b from-black via-purple-950/20 to-black flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>
        );
    }

    return (
        <div className="w-full h-full relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
            )}

            <Spline
                scene="https://prod.spline.design/1ORTHVpPxX9rox2J/scene.splinecode"
                className="w-full h-full"
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
}
