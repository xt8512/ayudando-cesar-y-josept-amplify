import { Card, CompoundButton } from "@fluentui/react-components";

export const TestApi = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <CompoundButton secondaryContent="status">
          RECUPERAR CONTRASEÑA
        </CompoundButton>
      </div>
    </Card>
  );
};
