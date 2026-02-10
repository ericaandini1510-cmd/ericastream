// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-b0c08e6f27a6b8a56b42196d34dac8bb');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/b0c08e6f27a6b8a56b42196d34dac8bb/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/f4/9f/d5/f49fd5e0d942ec3fc6217a24bcf09ab5.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="b9f0032361c4197fe8d87b03597e86de"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/b9/f0/03/b9f0032361c4197fe8d87b03597e86de.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}