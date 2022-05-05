import jwt, datetime

class Helper():

    def __init__(self,request):
        self.request = request
        self.secret_key = 'Biz101SECRETKEY'
        self.algorithm = 'HS256'

    def is_autheticated(self):
        try:
            jwt_str = self.request.headers.get('Authorization')
            payload = jwt.decode(jwt_str, self.secret_key, algorithms=[self.algorithm])
            return {
                "status":True,
                "payload":payload
            }
        except:
            return {
                "status":False,
                "payload":""
            }
            
    def get_token(self, id, usertype):
        payload={
            'id':id,
            'name':usertype,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=3600),
            'iat':datetime.datetime.utcnow()
            }
        return jwt.encode(payload, self.secret_key, algorithm=self.algorithm)

    def modify_input_for_multiple_files(self, property_id, image):
        dict = {}
        dict['property_id'] = property_id
        dict['image'] = image
        return dict
    
  