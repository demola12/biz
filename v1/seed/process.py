import json
from ..model.department_model import Department
from ..model.process_model import Process
from ..model.steps_model import Steps
from ..model.user_model import User
class ProcessSeed():
    def __init__(self,userid):
        self.userid=User.objects.filter(id=userid).first()
        self.file=[]
        
    def load_json(self):
        with open("assets/process.json") as json_file:
            json_data = json.load(json_file)
        return json_data
    def process_category(self,category):
       department= Department(userid=self.userid,name=category['name'],description=category['description'])
       department.save()
       self.save_process(department,category['process'])
    def save_process(self,department_id,processes):
        for process in processes:
            resolve_process=Process(departmentid=department_id,name=process['name'],position=process['position'],description=process['description'])
            resolve_process.save()
            self.save_step(resolve_process,process['steps'])
    def save_step(self,step_id,step):
        for steps in step:
            resolve_step=Steps(stepid=step_id,name=steps['name'],description=steps['description'],position=steps['position'])
            resolve_step.save()
    def seed(self):
        self.file=self.load_json()
        for category in self.file:
            self.process_category(category)