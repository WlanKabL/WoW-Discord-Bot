import { WebSocketServer, WebSocket } from "ws";

const PORT = 3001;
const wss = new WebSocketServer({ port: PORT });

console.log(`🚀 WebSocket server started on port ${PORT}`);

wss.on("connection", (ws) => {
    console.log("✅ WebSocket client (Website) connected.");

    ws.on("message", async (message) => {
        try {
            const data = JSON.parse(message.toString());
            console.log("📥 Received message:", data);

            // Simulate data retrieval
            const response = await simulateDataRetrieval(data);

            // Send response back to the client
            ws.send(JSON.stringify(response));
        } catch (error) {
            console.error("❌ Error processing message:", error);
        }
    });

    ws.on("close", () => {
        console.log("❌ WebSocket client disconnected.");
    });
});

/**
 * Simulates a data retrieval process that randomly succeeds or fails.
 * Possible failure states:
 *  - "OAuth token expired"
 *  - "Failed to retrieve data"
 */
const simulateDataRetrieval = (data: any): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const failureTypes = [
                { chance: 0.3, status: "error", message: "OAuth token expired. Please re-authenticate." },
                { chance: 0.3, status: "error", message: "Failed to retrieve your Battlenet and World of Warcraft Data. Please try again later." },
                { chance: 0.4, status: "success", message: "Data retrieved successfully.", data }
            ];

            let roll = Math.random();
            let cumulative = 0;

            for (let failure of failureTypes) {
                cumulative += failure.chance;
                if (roll <= cumulative) {
                    console.log(`🔹 Simulated response: ${failure.message}`);
                    resolve(failure);
                    return;
                }
            }
        }, 2000);
    });
};

