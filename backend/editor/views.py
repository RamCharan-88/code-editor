from rest_framework.views import APIView
from rest_framework.response import Response
import subprocess

class CodeExecuteView(APIView):
    def post(self, request):
        code = request.data.get("code")
        input_data = request.data.get("input", "")
        try:
            process = subprocess.run(
                ["python3", "-c", code],
                input=input_data.encode(),
                capture_output=True,
                timeout=5
            )
            return Response({
                "output": process.stdout.decode(),
                "error": process.stderr.decode()
            })
        except Exception as e:
            return Response({"error": str(e)})
