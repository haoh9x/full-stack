from rest_framework.permissions import BasePermission

class IsStaff(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff == True
    
class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj.email == request.user.email:
            return True
        
        return False