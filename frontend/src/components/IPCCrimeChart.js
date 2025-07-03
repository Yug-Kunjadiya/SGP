import React, { useState, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: [
    'Crimes Against Human Body (~25.7%)',
    'Property Crimes (~24%)',
    'Public Order Crimes (~18%)',
    'Other IPC Crimes (~32.3%)',
    'Crimes Against Women (~12%)',
    'Cybercrimes (~1.85%)'
  ],
  datasets: [
    {
      data: [914000, 855000, 641000, 1151000, 445256, 65893],
      backgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#f4b619', '#e02f2f', '#6c757d'],
      borderColor: '#fff',
      borderWidth: 2,
      hoverOffset: 30,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)',
    },
  ],
};

const options = {
  responsive: true,
  animation: {
    animateRotate: false,
    animateScale: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Breakdown of IPC Crimes (2022)',
      color: '#000000',
      font: {
        size: 20,
        weight: 'bold',
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        color: '#000000',
        font: {
          size: 12,
          weight: 'bold',
        },
        generateLabels: (chart) => {
          const data = chart.data;
          if (!data.datasets.length) {
            return [];
          }
          const dataset = data.datasets[0];
          return data.labels.map((label, i) => {
            const value = dataset.data[i];
            return {
              text: label,
              fillStyle: dataset.backgroundColor[i],
              strokeStyle: '#fff',
              lineWidth: 2,
              hidden: isNaN(dataset.data[i]) || dataset.data[i] === 0,
              index: i,
              // Custom property for number inside circle
              number: value,
            };
          });
        },
        // Custom draw function for legend labels to include number in circle
        // This requires patching the legend after chart is rendered, so we will do it in useEffect
      },
    },
  },
  cutout: 0,
};

const IPCCrimeChart = () => {
  const [animate, setAnimate] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.7 }
    );
    if (chartRef.current && chartRef.current instanceof Element) {
      observer.observe(chartRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Custom plugin to draw number inside circle in legend labels
  useEffect(() => {
    if (!chartRef.current) return;
    const chartInstance = chartRef.current.chartInstance || chartRef.current;
    if (!chartInstance) return;

    const legend = chartInstance.legend;
    if (!legend) return;

    // Patch legend after draw to add number in circle
    const originalDraw = legend.draw;
    legend.draw = function () {
      originalDraw.call(this);
      const ctx = this.ctx;
      this.legendItems.forEach((legendItem) => {
        const boxWidth = this.options.labels.boxWidth;
        const x = legendItem.left + boxWidth / 2;
        const y = legendItem.top + this.options.labels.font.size / 2;

        // Draw circle
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = legendItem.fillStyle;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.arc(x, y, boxWidth / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        // Draw number inside circle
        ctx.fillStyle = '#fff';
        ctx.font = `${this.options.labels.font.size * 0.8}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(legendItem.number, x, y);
        ctx.restore();
      });
    };
    chartInstance.update();
  }, [animate]);

  const animatedOptions = {
    ...options,
    animation: animate
      ? {
          animateRotate: true,
          animateScale: true,
          duration: 2000,
          easing: 'easeOutBounce',
        }
      : {
          animateRotate: false,
          animateScale: false,
        },
  };

  return (
    <div ref={chartRef} style={{ maxWidth: 375, margin: '0 auto' }}>
      <Pie data={data} options={animatedOptions} width={375} height={375} ref={chartRef} />
    </div>
  );
};

export default IPCCrimeChart;
