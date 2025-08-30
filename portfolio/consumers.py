from channels.generic.websocket import AsyncWebsocketConsumer
import json

class DataUpdateConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Join "updates" group
        await self.channel_layer.group_add("updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Leave "updates" group
        await self.channel_layer.group_discard("updates", self.channel_name)

    async def receive(self, text_data):
        """
        Handle messages sent from frontend (optional).
        Right now we just log and echo back.
        """
        data = json.loads(text_data)
        print("Received from frontend:", data)

        # Example echo
        await self.send(text_data=json.dumps({
            "type": "echo",
            "message": data
        }))

    async def send_update(self, event):
        """
        This is called when group_send(type="send_update") is fired.
        """
        await self.send(text_data=json.dumps({
            "type": "refresh",
            "message": "Backend data changed",
        }))
