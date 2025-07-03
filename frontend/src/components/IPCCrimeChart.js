import React, { useState, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const data = {
  labels: [
    'Crimes Against Human Body',
    'Property Crimes',
    'Public Order Crimes',
    'Other IPC Crimes',
    'Crimes Against Women',
    'Cybercrimes'
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
      display: false,
    },
    datalabels: {
      color: '#fff',
      formatter: (value, context) => {
        const dataset = context.chart.data.datasets[0];
        const total = dataset.data.reduce((acc, val) => acc + val, 0);
        const percentage = ((value / total) * 100).toFixed(1);
        const label = context.chart.data.labels[context.dataIndex];
        return `${label}\n${percentage}%`;
      },
      font: {
        weight: 'bold',
        size: 13,
      },
      anchor: 'center',
      align: 'center',
    },
  },
  cutout: 0,
};

const legendDetails = [
  { label: 'Crimes Against Human Body', color: '#2e59d9', percent: '~25.7%' },
  { label: 'Property Crimes', color: '#17a673', percent: '~24%' },
  { label: 'Public Order Crimes', color: '#2c9faf', percent: '~18%' },
  { label: 'Other IPC Crimes', color: '#f4b619', percent: '~32.3%' },
  { label: 'Crimes Against Women', color: '#e02f2f', percent: '~12%' },
  { label: 'Cybercrimes', color: '#6c757d', percent: '~1.85%' },
];

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
      try {
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
      } catch (error) {
        console.error('Error drawing legend numbers:', error);
      }
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
    <div ref={chartRef} style={{ maxWidth: 900, margin: '0 auto' }}>
      <Pie data={data} options={animatedOptions} width={900} height={900} ref={chartRef} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '24px auto 0',
        maxWidth: 420,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 10,
        boxShadow: '0 2px 12px #0001',
        padding: '16px 24px',
      }}>
        {legendDetails.map((item, idx) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, width: '100%' }}>
            <span style={{
              display: 'inline-block',
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: item.color,
              marginRight: 12,
              border: '2px solid #fff',
              boxShadow: '0 1px 4px #0002',
            }} />
            <span style={{ fontWeight: 600, color: '#222', flex: 1 }}>{item.label}</span>
            <span style={{ color: '#444', fontWeight: 500, marginLeft: 8 }}>{item.percent}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPCCrimeChart;
