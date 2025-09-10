import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      connections: number[];
    }> = [];

    // Create network nodes for a more serious, tech-inspired look
    const nodeCount = 25;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        connections: [],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges for more controlled movement
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Find connections to nearby nodes
        node.connections = [];
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              node.connections.push(j);
            }
          }
        });
      });

      // Draw connections first (behind nodes)
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex];
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Create gradient line that fades with distance
          const opacity = (1 - distance / 150) * 0.1;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`; // Gold color
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        
        // Create subtle gradient for nodes
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size);
        gradient.addColorStop(0, `rgba(255, 215, 0, ${node.opacity + 0.3})`);
        gradient.addColorStop(1, `rgba(255, 215, 0, ${node.opacity})`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add subtle outer ring for premium feel
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 1, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(192, 192, 192, ${node.opacity * 0.5})`; // Silver accent
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default ParticleBackground;