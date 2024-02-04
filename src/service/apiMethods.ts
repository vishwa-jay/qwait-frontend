
import { ILogin } from "../typings/interfaces/ILogin";
import { API } from "./builder";

export const GetAuthAPI = (request: ILogin) => {
  const url = "/login";
  return API.post<any>(url, request);
};

export const LogoutUserAPI =() =>{
  const url = `/logout`;
  return API.get<any>(url);
}

export const GetLoggedUserAPI =(token: string) => {
  const url = `/loggeduser`;
  return API.post<any>(url, { token: token });
}

// export const CreateTaskAPI = (request: ITaskRequest) => {
//   const url = "/api/v1/task/create";
//   return API.post<ITaskResponse>(url, request);
// };

// export const GetProjectAPI = (request: IProjectListRequest) => {
//   const url = "/api/v1/project/filter";
//   return API.get<any>(url, {
//     params: request,
//   });
// };

// export const GetProjectTaskListAPI = () => {
//   const url = "/api/v1/project";
//   return API.get<any>(url);
// };

// export const GetProfileAPI = (token: string) => {
//   const url = "/api/v1/user/profile";
//   return API.get<any>(url);
// };

// export const GetProjectTaskAPI = (projectId: any) => {
//   const url = `/api/v1/project/${projectId}/task`;
//   return API.get<any>(url);
// };

// export const TimeLogAPI = (data: any) => {
//   const url = "/api/v1/time/log";
//   return API.post<any>(url, data);
// };

// export const GetTimeAPI = (data: any) => {
//   const url = "/api/v1/time/get";
//   return API.get<any>(url, data);
// };

// export const UpdateTimeAPI = (data: any) => {
//   const url = "/api/v1/time/update";
//   return API.put<any>(url, data);
// };

// export const DeleteTimeAPI = (data: any) => {
//   const url = "/api/v1/time/delete";
//   return API.patch<any>(url, data);
// };

// export const GetClientAPI = (request: IClientListRequest) => {
//   const url = "/api/v1/client/filter";
//   return API.get<IClientListResponse>(url, {
//     params: request,
//   });
// };

// export const CreateClientAPI = (request: IClientRequest) => {
//   const url = "/api/v1/client/create";
//   return API.post<IClientResponse>(url, request);
// };

// export const GetUsersAPI = (request: IUserListRequest) => {
//   const url = "/api/v1/user/filter";
//   return API.get<IUserListResponse>(url, {
//     params: request,
//   });
// };

// export const CreateProjectAPI = (request: IProjectRequest) => {
//   const url = "/api/v1/project/create";
//   return API.post<IProjectResponse>(url, request);
// };

// export const CreateProjectTasksAPI = (request: IProjectTaskRequest) => {
//   const url = "/api/v1/project/task/add";
//   return API.post<IProjectTaskResponse>(url, request);
// };

// export const GetProjectByIdAPI = (id: string) => {
//   const url = "/api/v1/project/" + id;
//   return API.get<any>(url);
// };
// export const GetUsersByIdAPI = (userId: any) => {
//   const url = `/api/v1/user/${userId}`;
//   return API.get<any>(url);
// };

// export const UpdateUserAPI = (request: IUserEditRequest) => {
//   const url = "/api/v1/user/update";
//   return API.put<any>(url, request);
// };

// export const GetUserRolesAPI = () => {
//   const url = "/api/v1/user/roles";
//   return API.get<any>(url);
// };

// export const GetProjectMembersAPI = (projectId: any) => {
//   const url = `/api/v1/project-member/filter/`;
//   return API.get<any>(url, {
//     params: { id: projectId, sortList: "user.firstName", sortOrder: "ASC" },
//   });
// };

// export const CreateProjectMemberAPI = (request: IProjectMemberRequest) => {
//   const url = `/api/v1/project-member/create/`;
//   return API.post<any>(url, request);
// };

// export const UpdateProjectMemberPermissionAPI = (
//   request: IProjectMemberPermissionRequest
// ) => {
//   const url = `/api/v1/project-member/update/`;
//   return API.put<any>(url, request);
// };

// export const RemoveProjectMemberAPI = (id: string) => {
//   const url = `/api/v1/project-member/delete/${id}`;
//   return API.patch<any>(url);
// };
