import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  Courses,
  AdminLogin,
  AdminDashboard,
  AddNewAdmin,
  ResetPassword,
  AddCourse,
  AddStudents,
  StudentDashboard,
  StudentCourses
} from "../Pages";
import { Header } from "src/Components";

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="smtsp-admin" element={<AdminLogin />} />
        <Route path="smtsp-admin/dashboard" element={<AdminDashboard />} />
        <Route path="smtsp-admin/add-new-admin" element={<AddNewAdmin />} />
        <Route path="smtsp-admin/reset-password" element={<ResetPassword />} />
        <Route path="smtsp-admin/add-course" element={<AddCourse />} />
        <Route path="smtsp-admin/add-students" element={<AddStudents />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/dashboard/my-courses" element={<StudentCourses />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
