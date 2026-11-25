"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import * as client from "../../client";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
export default function Modules() {
  const { cid } = useParams();
  const courseId = String(cid);
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);
  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId]);
  const onAddModule = async (moduleName: string) => {
    const created = await client.createModuleForCourse(courseId, {
      name: moduleName,
    });
    addModule(created);
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };
  const onUpdateModule = async (module: CourseModule) => {
    const saved = await client.updateModule(module);
    updateModule(saved);
  };
  return (
    <div>
      <ModulesControls addModule={onAddModule} />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onRemoveModule={onRemoveModule}
            onUpdateModule={onUpdateModule}
          />
        ))}
      </ul>
    </div>
  );
}
